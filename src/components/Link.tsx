import NextLink from "next/link";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { forwardRef } from "react";

type Props = LinkProps & {
  href: string;
};

const Link = forwardRef<HTMLAnchorElement, Props>(({ href, ...props }, ref) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink ref={ref} {...props} />
    </NextLink>
  );
});

Link.displayName = "Link";

export default Link;
