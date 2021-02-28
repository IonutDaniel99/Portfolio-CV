import React from "react";
import Aside from "./Aside";
import Content from "./Content";

const Container = ({ data }) => {
    return (
        <div className="container gutter-top">
            <div className="row sticky-parent" >
                <Aside data={data.aside} />
                <Content data={data.content} />
            </div>
        </div>
    );
};

export default Container;