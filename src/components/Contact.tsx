import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  interest: z.string().min(1, { message: "Please select an interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data, error } = await supabase
        .from('contact_us')
        .insert([values]);

      if (error) {
        throw error;
      }

      toast.success("Message sent! We'll get back to you soon.");
      form.reset();
    } catch (error) {
        const supabaseError = error as { message?: string };
        console.error("Error submitting form:", supabaseError);
        toast.error(`Error: ${supabaseError.message || "Something went wrong."}`);
    }
  }

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Ready to transform your business? Get in touch today.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600 dark:text-gray-400">H.No. 30-265/25/56A/S-2, Sai Plaza, Neredmet, Hyderabad, Tirumalagiri, Telangana 500056, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">surendhranath@trusync.in</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400">+918143483438</p>
              </div>
            </div>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormLabel>Phone (Optional)</FormLabel><FormControl><Input placeholder="+91-..." {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                 <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem><FormLabel>Company (Optional)</FormLabel><FormControl><Input placeholder="Your Company" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                 <FormField control={form.control} name="industry" render={({ field }) => (
                  <FormItem><FormLabel>Industry (Optional)</FormLabel><FormControl><Input placeholder="Your Industry" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="interest" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                      <SelectContent>
                        <SelectItem value="ERP">ERP Implementation</SelectItem>
                        <SelectItem value="AI">AI Automation</SelectItem>
                        <SelectItem value="Both">Both ERP & AI</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="How can we help you?" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;