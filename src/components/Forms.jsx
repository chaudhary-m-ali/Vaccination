import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import group_45 from "../assets/Group45.png";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// 1️⃣ Schema (Zod)
const formSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters"),
  Phonenumber: z
    .string()
    .min(11, "phonenumber must be atleast 11 digits")
    .regex(/^\d+$/, "phone number must only contain digits"),
});

// 2️⃣ Component

const Forms = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      Phonenumber: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="bg-white flex justify-between px-20 py-10 items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-162.5"
        >
          {/* Email */}
          <h3 className="font-bold text-[48px] text-black">
            Get your vaccine registration today
          </h3>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h3 className="text-[24px] font-bold text-black mb-3 ">
                    Patient's Full Name
                  </h3>
                </FormLabel>
                <FormControl>
                  <Input
                    className={" py-5! text-black/25! bg-[#0B153C]/25! h-12! "}
                    type="text"
                    placeholder="Full Name"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="Phonenumber"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>
                    <div>
                      <h3 className="text-black text-[24px] font-bold">
                        Mobile Number
                      </h3>
                      <p className="text-[20px] font-medium text-black/50 mt-5 mb-3">
                        Notifications for appointment and reminders will be sent
                        to this provided number
                      </p>
                    </div>
                  </FormLabel>
                  <div className="flex justify-between gap-5  items-center">
                    <FormControl>
                      <Input
                        className={
                          "w-100  text-black/25! bg-[#0B153C]/25! py-5! h-12!"
                        }
                        type="text"
                        placeholder="Phone number"
                        {...field}
                      />
                    </FormControl>

                    <Button
                      className={
                        "w-53 font-bold text-[24px] py-5! bg-[#17C2EC]! cursor-pointer"
                      }
                      type="button"
                    >
                      Verify
                    </Button>
                  </div>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className={
              "bg-[#17C2EC]! w-full text-[24px] font-bold py-5 rounded-[20px] cursor-pointer"
            }
            type="submit"
          >
            Submit
          </Button>
          <div className="flex items-center justify-center  gap-[46px]">
            <h4 className="text-[20px] font-semibold text-black/50">
              Already registered ?
            </h4>
            <h4 className="font-bold text-[#17C2EC] text-[20px]">
              Check your status{" "}
            </h4>
          </div>
        </form>
      </Form>
      <img src={group_45} alt="" />
    </div>
  );
};

export default Forms;
