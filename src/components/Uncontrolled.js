import React,{useRef} from 'react'

const Uncontrolled = () => {

    const luckyName = useRef(null)

    const submitForm = (e) => {
        e.preventDefault();
        console.log(luckyName);
    }

  return (
    <div>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="luckyName">Enter you LuckyName</label>
                <input type="text"  id="luckyName" ref={luckyName} />
            </div>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled