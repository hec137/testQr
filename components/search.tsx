import { CSSProperties } from "react";
import IconButton from "./iconButton";

const Search = () => (
    <div style={{
        width: "90%",
        padding: "8px",
        display:"flex"
    }}>
        <input type="text" style={{
            width: "calc(100% - 36px)",
            height: "32px",
            backgroundColor: "#252526",
            color: "#fff",
            padding: "0px",
            border: "1px solid #fff",
            borderRight:"0px"
        }}></input>
        <IconButton click={() => {console.log("button click");}} icon="./search-svgrepo-com.svg" />
    </div>)

export default Search;
