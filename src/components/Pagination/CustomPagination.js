import { createTheme, ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const darkTheme = createTheme({
    palette : {
        type: "dark"
    }
})

const CustomPagination = ({setPage, noOfPages=10}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return(
        <div>
            <ThemeProvider theme={darkTheme}>
                <Pagination count={noOfPages} onChange={(e) => handlePageChange(e.target.textContent)} color="primary"/>
            </ThemeProvider>
        </div>
    );
}

export default CustomPagination;