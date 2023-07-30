import { render,screen,fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";

describe("<App/>",()=>{
    test("render the App",()=>{
        render(<BookList/>);
        const book = screen.getByText(/book/)
        expect(filterBookList).toBeInTheDocument();
    })
})

 