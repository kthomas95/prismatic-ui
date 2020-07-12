import React from "react";
import { Loader, IconButton } from "prismatic-ui/dist";

export default {
    title: "Data Display",
    id: "Data Display/Loader"
};

export const loader = () => (
    <>
        <h4>Loader</h4>
        <IconButton icon={Loader} size={48} />
        <Loader size={48} color="primary.main" />
    </>
);
