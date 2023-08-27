// material-ui
import { Box } from "@mui/material";
import Table from "components/Table/Table";
import { useState } from "react";
// project import


const columns = [
    {
        accessorKey: "name",
        title: "PO Number",
    },
    {
        accessorKey: "email",
        title: "Order Date",
    },
    {
        accessorKey: "gender",
        title: "Tax",
    },
    {
        accessorKey: "gender",
        title: "Discount",
    },
    {
        accessorKey: "gender",
        title: "Total",
    },
    {
        accessorKey: "gender",
        title: "Action",
    }
];

const data = {
    data: [
        {
            name: 'fdf',
            email: 'dfs',
            gender: 'ssssssss'
        },
        {
            name: 'fdf',
            email: 'dfs',
            gender: 'ssssssss'
        },
        {
            name: 'fdf',
            email: 'dfs',
            gender: 'ssssssss'
        },
        {
            name: 'fdf',
            email: 'dfs',
            gender: 'ssssssss'
        },
        {
            name: 'fdf',
            email: 'dfs',
            gender: 'ssssssss'
        },
        {
            name: 'fdf',
            email: 'dfs',
            gender: 'ssssssss'
        },

    ]
}

const onClickRow = (cell, row) => {
    console.log({ cell, row });
};
function PurchaseOrder() {

    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    console.log(currentPage, search);

    return (
        <Box padding={2}>
            <Table
                data={data.data}
                columns={columns}
                onClickRow={onClickRow}
                pageCount={5}
                page={setCurrentPage}
                search={setSearch}
                searchLabel="Search by name"
            />
        </Box>
    )
}

export default PurchaseOrder;
