import React from 'react'

export default class Contact extends React.Component {
    render() {
        return (
            <article id="contact" className="contact">
                <div class="container2">
                    <form action="action_page.php">

                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label for="mail">Email adress</label>
                        <input type="text" id="mail" name="mail" placeholder="Your email adress.." />
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                        <input type="submit" value="Submit"/>
              
                </form>
              </div>
            </article>
                )
    }
}