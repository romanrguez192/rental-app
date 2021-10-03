import Meta from "@components/Meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
