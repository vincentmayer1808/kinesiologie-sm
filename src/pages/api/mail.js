import { sendMail } from "../../helpers/sendMail";

const api = async (req, res) => {

    const { email, username, message } = req.body

    try {
        const { method } = req;
        if (method === "POST") {
            await sendMail(email, username, message)
            res.status(200).send("Success")
        } 
      
    } catch (err) {
        res.status(400).json({
            error_code: "api_one",
            message: err.message,
        });
    }
};

export default api