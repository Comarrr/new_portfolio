"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser';
import React, { useRef } from "react"

 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
	message: "Email must be a valid email.",
  }),
  message: z.string(),
})


const Contact = () => {

	const formRef = React.useRef<HTMLFormElement>(null)

	 // 1. Define your form.
	 const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
		  name: "",
		  email: "",
		  message: "",
		},
	  })
	 
	  // 2. Define a submit handler.
	  function onSubmit(values: z.infer<typeof formSchema>) {

		if (formRef.current) {
			emailjs.sendForm("service_6nl66ws", "template_wm7kpvm", formRef.current, "uWwtKQx0APn7ZSnaz")
			.then((result) => {
			  console.log(result.text);
			}, (error) => {
			  console.log(error.text);
			});
			form.reset()
			console.log(values)
		  } else {
			console.error("Form element not found.")
		  }
	  }

	  return (
		<div className="py-8 px-16">
			<h2 className="text-4xl font-semibold underline">Contact.</h2>
			<div className="mt-8 flex flex-col gap-8 mt-24  items-center justify-center">
				<Form {...form}>
				<form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col w-1/2">
					<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
						<FormControl>
							<Input placeholder="name" {...field} />
						</FormControl>
						<FormMessage />
						</FormItem>
					)}
					/>
					<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
						<FormControl>
							<Input placeholder="email" {...field} />
						</FormControl>
						<FormMessage />
						</FormItem>
					)}
					/>
					<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
						<FormControl>
							<Textarea placeholder="message" {...field} />
						</FormControl>
						<FormMessage />
						</FormItem>
					)}
					/>
					<Button type="submit">Submit</Button>
				</form>
				</Form>
			</div>
		</div>
	  )
	}
	


export default Contact