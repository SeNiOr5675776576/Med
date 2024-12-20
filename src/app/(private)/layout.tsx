import Header from "@/component/header";

export default function PrivateLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <Header/>{children}
    </>
  );
}
