import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import SocialNetworks from "../social-networks";

afterEach(cleanup);

describe("<SocialNetworks />", () => {
  it("should render", () => {
    render(<SocialNetworks socials={[{ href: "", title: "Github" }]} />);
    expect(screen.getAllByText("Github")).toBeDefined();
  });

  it("should list 3 items", () => {
    const socials = [
      { href: "", title: "Item 1" },
      { href: "", title: "Item 2" },
      { href: "", title: "Item 3" },
    ];
    render(<SocialNetworks socials={socials} />);

    const el = screen.getByTestId("social-networks-list");
    expect(el.childElementCount).toBe(3);
  });
});
