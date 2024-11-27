"use client"

import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import {useInput} from "@/hooks/use-input";

export default function Page() {
  const [email, inputEmail] = useInput({
    type: "email",
    placeholder: "name@example.com",
    autoCapitalize: "none",
    autoComplete: "email",
    autoCorrect: "off"
  });
  const [password, inputPassword] = useInput({
    type: "password",
  })

  const fetchLogin = (async () => {
    if (!email) {
      console.log("email is missing")
    }
    if (!password) {
      console.log("password is missing")
    }

    const res = await fetch("/api/auth/login", {method: "POST"})
    console.log(res)
  })

  return (
    <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900"></div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src={"/vercel.svg"} alt={"Image"} width={16} height={16}/>
          &nbsp;Acme Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2"><p className="text-lg">“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”</p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your email and password below to login</p>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="email">Email</Label>
                  {inputEmail}
                  <Label className="sr-only" htmlFor="password">Password</Label>
                  {inputPassword}
                  <p className="text-xs text-right text-muted-foreground"><Link className="underline underline-offset-4 hover:text-primary" href="/auth/reset">Needs help?</Link></p>
                </div>
                <Button onClick={async (e) => {
                  e.preventDefault();
                  await fetchLogin()
                }}>Sign In with Email</Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
            </div>
            <Button className={"bg-white border shadow-sm text-accent-foreground hover:bg-accent"}>
              <Image src={"/google.svg"} alt={"Google"} width={16} height={16}/>
              Google
            </Button>
          </div>
          <div className={"space-y-2"}>
            <p className="text-sm text-muted-foreground">First time here? <Link className="underline underline-offset-4 hover:text-primary" href="/auth/register">Register your account</Link></p>
            <p className="text-sm text-muted-foreground">By clicking continue, you agree to our <a className="underline underline-offset-4 hover:text-primary" href="/terms">Terms of Service</a> and <a className="underline underline-offset-4 hover:text-primary" href="/privacy">Privacy
              Policy</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}