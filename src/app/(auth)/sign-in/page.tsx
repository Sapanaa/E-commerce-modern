import AuthForm from "@/components/AuthForm";
import {signIn} from "@/lib/auth/action";

export default function Page() {
  return <AuthForm mode="sign-in" onSubmit={signIn} />;
}