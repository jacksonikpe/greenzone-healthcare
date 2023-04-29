/** @jsx jsx */
import NextLink from "next/link";
import { jsx, Link as A } from "theme-ui";
import { Link as MenuLink } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";
import { keyframes } from "@emotion/core";

export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={styles.learnMore} {...rest}>
        {label ?? "Learn More"} <IoIosArrowForward size="16px" />
      </A>
    </NextLink>
  );
}

const fadeRight = keyframes`
  
`;

const styles = {
  learnMore: {
    color: "link",
    cursor: "pointer",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    svg: {
      transform: "translateX(3px)",
    },
    ":hover": {
      svg: {
        animation: `${fadeRight} 0.5s linear`,
      },
    },
  },
};
