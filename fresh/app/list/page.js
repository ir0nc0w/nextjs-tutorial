export default function List() {
    let Items = ['Tomatoes', 'Pasta', 'Coconut']
    let Prices= [40, 40, 40]
    return (
        <div>
            <h4 className="title">Item Lists</h4>
            {
                Items.map((v, i)=>{
                    return (
                        <div className="food" key={i}>
                            <h4>{v} ${Prices[i]} </h4>
                        </div>
                    )
                })
            }
        </div>
    )
}