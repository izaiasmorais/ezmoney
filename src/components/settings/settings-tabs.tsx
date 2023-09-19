"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralTab } from "./general-tab";

export function SettingsTabs() {
	return (
		<Tabs defaultValue="general" className="w-full">
			<TabsList>
				<TabsTrigger value="general">General</TabsTrigger>
				<TabsTrigger value="notifications">Notifications</TabsTrigger>
				<TabsTrigger value="security">Security</TabsTrigger>
			</TabsList>
			<TabsContent value="general">
				<GeneralTab />
			</TabsContent>
			<TabsContent value="notifications"></TabsContent>
			<TabsContent value="security"></TabsContent>
		</Tabs>
	);
}
