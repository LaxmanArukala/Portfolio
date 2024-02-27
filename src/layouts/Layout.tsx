import { ReactNode } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
