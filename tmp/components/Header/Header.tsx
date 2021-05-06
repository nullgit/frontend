import classes from "./Header.module.css"


export default function Header() {
    let styles;
    let arr = [1, 2, 3];
    return (
        <div className="wrapper">
            <ul>
                {
                    arr.map((value, index) => {
                        return (<li>value</li>);
                    })
                }
            </ul>

            <style jsx>{".wrapper{height:100px; background-color:red }"}</style>
        </div>
    )
}

