import { useTheme } from "next-themes";
import { ThreeDots } from "react-loader-spinner";

export function LoadingDots() {
  const { theme } = useTheme();

  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color={theme === "light" ? "#000000" : "#ffffff"}
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
}
