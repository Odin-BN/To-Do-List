import { render, screen} from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import SearchButton from "../ui/SearchButton";

describe("SearchButton", () => {
    it("should render the button correctly", () => {
        render(<SearchButton/>);
        expect(screen.getByText(/Search/i)).toBeInTheDocument();
    });
});