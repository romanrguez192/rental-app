import Link from "next/link";
import { Button, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {
  href: string;
};

const ButtonLink = ({ href, ...props }: Props): JSX.Element => {
  return (
    <Link href={href} passHref>
      <Button as="a" {...props} />
    </Link>
  );
};

export default ButtonLink;
