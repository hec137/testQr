import { CSSProperties } from "react";
import IconButton from "./iconButton";

const Search = () => (
    <div style={{
        width: "90%",
        padding: "8px"
    }}>
        <input style={{
            width: "100%",
            height: "32px",
            backgroundColor: "#252526",
            color: "#fff",
            border: "1px solid #fff"
        }}></input>
        <IconButton click={() => {console.log("button click");}} icon="search" />
        search bar
    </div>)

export default Search;
