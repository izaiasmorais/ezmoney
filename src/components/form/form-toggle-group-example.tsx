"use client";
import { useForm } from "react-hook-form";
import { FormToggleGroup } from "./form-toggle-group";

// Exemplo de uso do FormToggleGroup com alwaysSelected
export function FormToggleGroupExample() {
	const form = useForm({
		defaultValues: {
			accountType: "",
			priority: "",
			status: "",
		},
	});

	const accountTypeOptions = [
		{ label: "Conta Bancária", value: "BANK" },
		{ label: "Cartão de Crédito", value: "CREDIT_CARD" },
	];

	const priorityOptions = [
		{ label: "Baixa", value: "LOW" },
		{ label: "Média", value: "MEDIUM" },
		{ label: "Alta", value: "HIGH" },
	];

	const statusOptions = [
		{ label: "Ativo", value: "ACTIVE" },
		{ label: "Inativo", value: "INACTIVE" },
	];

	return (
		<div className="space-y-6 p-4">
			<h2 className="text-lg font-semibold">Exemplos de FormToggleGroup</h2>

			{/* Exemplo 1: Sempre selecionado (alwaysSelected=true) */}
			<div className="space-y-2">
				<h3 className="text-md font-medium">
					Tipo de Conta (Sempre Selecionado)
				</h3>
				<FormToggleGroup
					form={form}
					entity="accountType"
					translatedEntity="Tipo de conta"
					options={accountTypeOptions}
					alwaysSelected={true}
					className="w-full"
				/>
				<p className="text-sm text-muted-foreground">
					Este toggle group sempre terá um item selecionado. Se nenhum valor
					estiver definido, o primeiro item será automaticamente selecionado.
				</p>
			</div>

			{/* Exemplo 2: Seleção opcional (alwaysSelected=false) */}
			<div className="space-y-2">
				<h3 className="text-md font-medium">Prioridade (Seleção Opcional)</h3>
				<FormToggleGroup
					form={form}
					entity="priority"
					translatedEntity="Prioridade"
					options={priorityOptions}
					alwaysSelected={false}
					className="w-full"
				/>
				<p className="text-sm text-muted-foreground">
					Este toggle group permite que nenhum item esteja selecionado. Você
					pode clicar em um item selecionado para desmarcá-lo.
				</p>
			</div>

			{/* Exemplo 3: Múltipla seleção */}
			<div className="space-y-2">
				<h3 className="text-md font-medium">Status (Múltipla Seleção)</h3>
				<FormToggleGroup
					form={form}
					entity="status"
					translatedEntity="Status"
					options={statusOptions}
					type="multiple"
					className="w-full"
				/>
				<p className="text-sm text-muted-foreground">
					Este toggle group permite seleção múltipla. A funcionalidade
					alwaysSelected não se aplica ao tipo "multiple".
				</p>
			</div>

			{/* Exibição dos valores atuais */}
			<div className="mt-6 p-4 bg-muted rounded-lg">
				<h3 className="text-md font-medium mb-2">Valores Atuais:</h3>
				<pre className="text-sm">{JSON.stringify(form.watch(), null, 2)}</pre>
			</div>
		</div>
	);
}
