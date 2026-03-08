"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  productType: z.enum(["agency-starter", "agency-plus", "agency-pro"]),
});

export default function RequestAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      productType: "agency-starter",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-lg mx-auto border-indigo-500/20 bg-slate-900/80 backdrop-blur-sm rounded-3xl h-full flex flex-col justify-center">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="h-20 w-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          </div>
          <CardTitle className="text-3xl mb-4 text-white">Request Received!</CardTitle>
          <CardDescription className="text-slate-300 text-lg max-w-sm">
            Thank you for your interest. Our team will contact you shortly at the provided email and mobile number.
          </CardDescription>
          <Button 
            className="mt-8 bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 h-12 px-8 rounded-xl"
            onClick={() => setIsSubmitted(false)}
          >
            Submit another request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-2xl rounded-3xl h-full">
      <CardHeader className="pt-8 pb-6 px-8">
        <CardTitle className="text-2xl text-white">Activate Your Renewal Dashboard</CardTitle>
        <CardDescription className="text-slate-400">
          Fill out the form below and we&apos;ll get in touch with you.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Full Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your full name" 
                      className="bg-slate-950/50 border-slate-700 text-white focus-visible:ring-indigo-500 placeholder:text-slate-600 h-12"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Email Address *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your.email@example.com" 
                      type="email" 
                      className="bg-slate-950/50 border-slate-700 text-white focus-visible:ring-indigo-500 placeholder:text-slate-600 h-12"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Mobile Number *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+91 98765 43210" 
                      className="bg-slate-950/50 border-slate-700 text-white focus-visible:ring-indigo-500 placeholder:text-slate-600 h-12"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Product Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-slate-950/50 border-slate-700 text-white focus:ring-indigo-500 h-12">
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-900 border-slate-800 text-white">
                      <SelectItem value="agency-starter" className="focus:bg-slate-800 focus:text-white">Agency Starter</SelectItem>
                      <SelectItem value="agency-plus" className="focus:bg-slate-800 focus:text-white">Agency Plus</SelectItem>
                      <SelectItem value="agency-pro" className="focus:bg-slate-800 focus:text-white">Agency Pro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <Button 
                type="submit" 
                className="w-full h-14 text-lg font-bold mt-4 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white border-0 shadow-[0_0_20px_rgba(99,102,241,0.3)] rounded-xl transition-all hover:scale-[1.02]" 
                disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Activate My Dashboard"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
