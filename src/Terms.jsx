import React from "react";
import { useNavigate } from "react-router-dom";

function Terms (){
    const navigate = useNavigate();

    const navigateToSignUp = () => {
      navigate("/signup");
    };

    return (
        <div>
        <p>
1. 
Welcome to UplifMe. These terms and conditions govern your use of the App.
<br/> <br/>
2. Use of the App
    By using the App, you agree to these Terms. If you do not agree, do not use the App.
    The App is intended for individuals seeking mental health support and guidance.
    You must be at least 18 years old to use the App. If you are under 18, you must obtain parental consent.
    <br/><br/>
3. Disclaimer
   The App is not a substitute for professional mental health advice or treatment. It is intended for informational and support purposes only.
   We do not guarantee the accuracy, reliability, or completeness of any information provided in the App.
   Use of the App does not create a therapist-client relationship. Consult a qualified mental health professional for personalized advice.
   <br/> <br/>
4. User Conduct
   You agree to use the App responsibly and respect the rights of others.
   Do not use the App to engage in unlawful, abusive, or harmful activities.
   Do not impersonate others or misrepresent your identity.
   <br/> <br/>
5. Limitation of Liability
    We are not liable for any damages arising from your use of the App.
    We are not responsible for the actions or conduct of other users of the App.
    <br/> <br/>
6. Modification and Termination
    We reserve the right to modify, suspend, or terminate the App at any time, with or without notice.
    We may also update these Terms from time to time. Continued use of the App after any changes constitutes acceptance of the new Terms.

    <br/> <br/>
7. Contact Us
 
    If you have any questions or concerns about these Terms, please email us at ibrahimyabagi9@gmail.com

        </p>
        <button onClick={navigateToSignUp}>
            Continue
        </button>
        </div>
    )
}
export default Terms;
