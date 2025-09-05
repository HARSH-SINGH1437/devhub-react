
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { FaGoogle } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { LegalDialog } from "./terms-dialog";
const apiUrl = import.meta.env.VITE_BACKEND_API_URL



const AuthCard: React.FC = () => {

    const handleGithubAuth = () => {
        window.location.href = `${apiUrl}/auth/github`
    }

    return (
        <Card>
            <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle>Welcome to DevHub</CardTitle>
                <CardDescription>Sign in to continue</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-[2rem] justify-center items-center">
                <Button className="w-[70%] " onClick={handleGithubAuth} variant={'secondary'}><RiGithubFill />
                    Continue with Github</Button>
                <Button className="w-[70%]" variant={'secondary'}><FaGoogle />
                    Continue with Google</Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-[2rem] justify-center items-center">
                <CardDescription className="w-[80%] ">

                    <p className="text-sm text-muted-foreground text-center max-w-md">
                        By continuing, you agree to our{" "}
                        <LegalDialog type="terms">Terms of Service</LegalDialog> and{" "}
                        <LegalDialog type="privacy">Privacy Policy</LegalDialog>.
                    </p>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}

export default AuthCard