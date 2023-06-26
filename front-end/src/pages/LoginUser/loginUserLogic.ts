import React, { useEffect, useState } from "react";
import axios from "axios";

const LoginUserLogic = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [rowData, setRowData] = useState<Employee[]>([]);
    const [rowPosition, setRowPosition] = useState<number | null>(null);
    const [isPosting, setIsPosting] = useState<boolean | null>(null);
    const [checkRadio, setCheckRadio] = useState<number>(1);
    const [keyword, setKeyword] = useState<string>("");
    const [isDisabledSort, setIsDisabledSort] = useState<boolean>(true);

    useEffect(() => {
        // Component mounted
        const fetchData = async () => {
            try {
                const response = await axios.get("/Employees/GetAll");
                const databaseRowData = response.data.length
                    ? JSON.parse(JSON.stringify(response.data))
                    : [];
                const databaseRowData2 = getRowData(databaseRowData);
                const filteredRowData = getFilterRowData(databaseRowData2);

                setEmployees(databaseRowData2);
                setRowData(filteredRowData);
                setRowPosition(null);

                setIsDisabledSort(true);
                setIsPosting(false);
            } catch (error) {
                console.error("Failed to fetch data from the server.");
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Check radio or keyword change
        const filteredRowData = getFilterRowData(employees);
        setRowData(filteredRowData);
    }, [checkRadio, keyword, employees]);

    const setColumnDefs = (): ColumnDef[] => {
        return [
            {
                headerName: "ID",
                field: "id",
                colId: "id",
                pinned: "left",
                hide: true,
            },
            {
                headerName: "Employee Name",
                field: "employeeName",
                colId: "employeeName",
                headerTooltip: "Employee Name",
                tooltipField: "employeeName",
                pinned: "left",
                width: 120,
            },
            // ... Add other columns here
        ];
    };

    const gridOptions = {
        animateRows: true,
        columnDefs: setColumnDefs(),
        // ... Other grid options
    };

    const getFilterRowData = (rowData: Employee[]): Employee[] => {
        if (rowData.length) {
            const filteredRowData = rowData.filter((element) => {
                if (
                    checkRadio === 1 &&
                    !element.isDeleted &&
                    element.employeeName?.toString().includes(keyword)
                ) {
                    return true;
                } else if (checkRadio === 2 && element.employeeName?.toString().includes(keyword)) {
                    return true;
                }
                return false;
            });
            return filteredRowData;
        }
        return [];
    };

    const getRowData = (data: Employee[]): Employee[] => {
        // Perform any data transformation or formatting if required
        return data;
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckRadio(parseInt(event.target.value));
    };

    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const handleSearch = () => {
        // Perform search logic here
    };

    const handleSearchClear = () => {
        setKeyword("");
    };

    const handleNewRegister = () => {
        // Handle new register logic here
    };

    const handleSort = () => {
        // Handle sort logic here
    };

    const handleGridReady = (params: any) => {
        // Save grid API reference for later use
        gridOptions.api = params.api;
    };
};

export default loginUserLogic;
