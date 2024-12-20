import Header from "@/component/header";

export default function PublicLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <Header/>{children}
    </>
  );
}
