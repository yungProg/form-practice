import React from "react"

function Form(){
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            otherName: "",
            lastName: "",
            age: "",
            email: "",
            password: "",
            passwordConfirm: "",
            howYouHeardAboutUs: "",
            committed: "",
            agreement: false
        }
    )
    function handleFormData(event){
        const {name, type, value, checked} = event.target
        setFormData(
            prevFormData => {
                return(
                    {
                        ...prevFormData,
                        [name]: type === "checkbox" ? checked : value
                    }
                )
            }
        )
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    return(
        <div>
            <h1>O'Brown Academy</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="firstName" className="block">First Name</label>
                <input 
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleFormData}
                    required
                />
                </div>
                <div>
                <label htmlFor="otherName" className="block">Other Name</label>
                <input 
                    id="otherName"
                    name="otherName"
                    type="text"
                    placeholder="Other Name"
                    value={formData.otherName}
                    onChange={handleFormData}
                />
                </div>
                <div>
                <label htmlFor="lastName" className="block">Last Name</label>
                <input 
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleFormData}
                />
                </div>
                <div>
                <label htmlFor="age" className="block">Age</label>
                <input 
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Age"
                    required
                    value={formData.age}
                    onChange={handleFormData}
                />
                </div>
                <div>
                <label htmlFor="email" className="block">Email</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="someone@email.com"
                    required
                    value={formData.email}
                    onChange={handleFormData}
                    autoComplete="username"
                />
                </div>
                <div>
                <label htmlFor="password" className="block">Password</label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleFormData}
                    autoComplete="new-password"
                />
                </div>
                <div>
                <label htmlFor="passwordConfirm" className="block">Confirm Password</label>
                <input 
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={formData.passwordConfirm}
                    onChange={handleFormData}
                    autoComplete="new-password"
                />
                </div>
                <div>
                <label htmlFor="howYouHeardAboutUs" className="block">How did you hear about us?</label>
                <select
                    id="howYouHeardAboutUs"
                    name="howYouHeardAboutUs"
                    value={formData.howYouHeardAboutUs}
                    onChange={handleFormData}
                >
                    <option value={""}>--Choose--</option>
                    <option value={"Social Media"}>Social Media</option>
                    <option value={"Newspaper"}>Newspaper</option>
                    <option value={"A friend or relative"}>A friend or relative</option>
                    <option value={"Ad"}>Ad</option>
                    <option value={"Other"}>Other</option>
                </select>
                </div>
                <div>
                <p>Are you willing to dedicate 30 hours per week to take this course?</p>
                <div>
                    <input 
                        id="yes" 
                        name="committed" 
                        type="radio"
                        value="Yes"
                        onChange={handleFormData}
                    /> 
                    <label htmlFor="yes">Yes</label>
                </div>
                <div>
                    <input 
                        id="no" 
                        name="committed" 
                        type="radio"
                        value="No"
                        onChange={handleFormData}
                    /> 
                    <label htmlFor="no">No</label>
                </div>
                <div>
                    <input 
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    checked={formData.agreement}
                    onChange={handleFormData}
                    />
                <label htmlFor="agreement">I have read and agreed to our privacy policy</label>
                </div>
                </div>
                <div>
                <button className="block">Enroll</button>
                </div>
            </form>
        </div>
    )
}

export default Form