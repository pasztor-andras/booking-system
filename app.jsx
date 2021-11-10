const Modal = ({ closeModal }) => {

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();

        return yyyy + "-" + mm + "-" + dd;
    };

    const disablePastTime = () => {
        const today = new Date();
        const hour = today.getUTCHours() + 2
        const min = String(today.getMinutes()).padStart(2, "0");

        return hour + ":" + min;
    };

    const [value, setValue] = React.useState({ email: "" });
    const [error, setError] = React.useState();
    const [classNameChanger, setclassNameChanger] = React.useState("");

    {/*ITTTTTT*/ }
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [personNumber, setPersonNumber] = React.useState("");


    let handleOnChange = (emailValue) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailValue === "") {
            setError();
        }
        else if (re.test(emailValue)) {
            setError(true);
            setclassNameChanger("greenB")
        } else {
            setError(false);
            setclassNameChanger("redB")
        }
    }

    const [bookingtimes, setBookingTime] = React.useState([
        "16:00", "19:00", "20:00", "21:00", "18:00", 
     ])
 
     const canBooking = ()=>{
        const today = new Date();
        const hour = today.getUTCHours() + 2
        const min = String(today.getMinutes()).padStart(2, "0");

        const myTime = hour + ":"+ min
        console.log(typeof(myTime))
        //const myArr=[];

        for (const time of bookingtimes) {
            if(Number(time.substring(0,2))-1 >= Number(myTime.substring(0,2) )){
                setBookingTime([...time])
            }
        }
    }
 
     console.log(canBooking())



    let sumConsol = () => {
        console.log("Name:" + " " + name)
        console.log("Email address:" + " " + email)
        console.log("Date:" + " " + date)
        console.log("Time:" + " " + time)
        console.log("Number of persons:" + " " + personNumber)

    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button style={{width: "30px"}} onClick={() => closeModal(false)}> X </button>
                <div className="title">
                    <h1>Booking Form</h1>
                </div>
                <div className="body" >
                    <label>Name:</label>
                    <input name="person" type="text" placeholder="Enter your name here" onChange={e => setName(e.target.value)} /> <br />
                    <label >E-mail:</label>
                    <input placeholder="E-mail address" className={classNameChanger} type="email" value={value.email} onKeyUp={() => handleOnChange(value)} onChange={e => { setValue(e.target.value); setEmail(e.target.value) }} /> <br />
                        {/*<button onClick={()=>handleOnChange(value)}> Validation</button>*/}
                        {(error != "") ? <span>  </span> : <span> Wrong email format </span>}

                    <label>Pick a date and time:</label><br/>
                    <input type="date" name="date" min={disablePastDate()} onChange={e => setDate(e.target.value)} /><br />
                    <input type="time" value={bookingtimes} name="time" onClick={canBooking} onChange={e => setTime(e.target.value)} /><br />

                    <label> How many person:</label>
                    <input type="number" min="1" onChange={e => setPersonNumber(e.target.value)} /><br />
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button onClick={() => sumConsol()}>Book the table</button>
                </div>
            </div>
        </div>
    )
}

const App = () => {

    const [pizzas, setPizzas] = React.useState([
        { name: "Big Moses", ingredient: "The chosen pizza. have some faith, for it will be good.", price: "22$" },
        { name: "Funghi", ingredient: "shredded mozzarella, pecorino, mushrooms, thyme, tomato sauce", price: "21$" },
        { name: "Primo", ingredient: "fresh mozzarella, pecorino, salami, red onion, pickled peppers, oregano, tomato sauce", price: "23$" },
        { name: "BPC Pepperoni", ingredient: "a classic!  this is our favorite so we gave it our name, and loaded it up with pepperoni", price: "22$" },
        { name: "Veggie Bomb", ingredient: "shredded mozzarella, pecorino, grape tomato, zucchini, taggiasca olive, pickled pepper, red onion, mushroom, tomato sauce", price: "22$" },
        { name: "Carbonara", ingredient: "shredded mozzarella, garlic oil, egg, garlic confit, speck, parmigiano reggiano", price: "23$" },
        { name: "Spicy Italian", ingredient: "shredded mozzarella, pecorino, italian sausage, fennel, red onion, fennel pollen, tomato sauce", price: "22$" },
        { name: "Parma", ingredient: "fresh mozzarella, pecorino, prosciutto, dressed arugula, tomato sauce", price: "22$" },
        { name: "Ballard Bridge", ingredient: "shredded mozzarella, pecorino, pepperoni, sausage, mushroom, black olive, tomato sauce", price: "23$" },
        { name: "Staple & Fancy", ingredient: "shredded mozzarella, pecorino, pepperoni, pineapple, jalapeno, tomato sauce", price: "22$" },
    ])

    const [openModal, setOpenModal] = React.useState(false)

    return (
        <div id="app-container">
            <img src="pizza_logo.png" alt="pizzalogo" />
            <div className="textContainer">
                <p id="description">Our specialty is New York style pizza. From the quality NW ingredients to the perfectly aged dough, you will notice the difference from the very first bite. Both locations feature in-restaurant dining as well as spacious patios. We look forward to hosting you for pizza, frozen cocktails, a bottle of wine, or one of our many local beers available on draft.</p>
                <h2>Menu</h2>
                <div className="pizza-box">
                    {pizzas.map(pizza => <p className="pizzaList" key={pizza.name}> <span style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}><p>{pizza.name}</p> {pizza.price} </span>  <p style={{paddingBottom: "20px"}}>{pizza.ingredient}</p></p>)}
                </div>
                <div className="modalBtnContainer">
                    <button className="openModalBtn" onClick={() => { setOpenModal(true) }}>Booking a table</button>
                </div>
                {openModal && <Modal closeModal={setOpenModal} />}
            </div>
        </div>
    )
}