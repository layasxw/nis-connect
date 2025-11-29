import Test from "../../components/Test/Test"
import { Typography, Container } from "@mui/material"
import { testQuestions } from "../../mock/mockText"
export default function StudyHub() {
    return(
        <>
            {testQuestions.map((question) => (
                <Container key={question.n}><Test test={question}></Test></Container>
            ))}
        </>
    )
}