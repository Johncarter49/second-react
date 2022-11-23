import styles from "./ListDev.module.css";

const list = [
    {
        title: "JS Course",
        price: "1000Euro",
        name: "Marvin",
        id: 0,
        url:"https://JS.com"
        },
        {
        title: "React Course",
        price: "5000 Euro",
        name: "Ozgur",
        id: 1,
        url:"https://JS.com"

            },
            {
                title: "CSS Course",
                price: "500 Euro",
                name: "Ann",
                id: 2,
        url:"https://React.com"

                }
];

const ListDev = () => {
    return(
        <>
        {/* <ul>
            {list.map((item) => {
                return(
                    <li key={item.id}>
                        <a href={item.url}>{item.title}</a>
                        <p>{item.name}</p>
                        <h3>{item.price}</h3>
                    </li>
                )
            })}
        </ul> */}

{list.map((item)=> 
        <article key={item.id}>
            <div>
                <a className={styles.color} href={item.url}>{item.title}</a>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
        </article>
      )}
        </>
    )
}
 
export default ListDev;