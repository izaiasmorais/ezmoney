import { useTheme } from "next-themes";
import { ThreeDots } from "react-loader-spinner";

export function LoadingDots() {
  const { theme } = useTheme();

  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color={theme === "light" ? "black" : theme === "dark" ? "white" : "white"}
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
}
