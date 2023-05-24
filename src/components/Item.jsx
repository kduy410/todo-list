import React, { useState } from "react";

export default function Item(props) {
    return <div onClick={() => props.onChecked(props.id)}>
        <li>{props.item}</li>
    </div>
}