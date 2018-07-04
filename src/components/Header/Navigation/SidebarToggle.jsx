import React from 'react';

const SidebarToggle = (props) => {

    let classes = ["show-mobile-s", "mobile-burger"];

    if (!props.show) {
        classes.push("fas fa-bars");
    }
    else {
        classes.push("fas fa-times");
    }

    const cssArr = classes.join(" ");

    return (
        <i onClick={() => props.clicked(!props.show)} className={cssArr}></i>
    );
};

export default SidebarToggle;