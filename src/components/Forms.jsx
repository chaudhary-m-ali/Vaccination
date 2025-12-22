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
    <div className="bg-white flex justify-between px-5 py-10 lg:px-20 lg:py-10 items-center max-lg:flex-col max-lg:gap-10 max-lg:items-start max-sm:items-center">
      <div className="flex flex-col max-lg:order-1 max-lg:contents ">
        {" "}
        <h3 className="font-bold text-[48px] text-black max-lg:order-1 max-md:text-[36px] max-sm:text-[24px] max-sm:text-center">
          Get your vaccine registration today
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-162.5 max-lg:order-3 max-md:w-full"
          >
            {/* Email */}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <h3 className="text-[24px] font-bold text-black mb-3 max-sm:text-[14px] ">
                      Patient's Full Name
                    </h3>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={
                        " py-5! text-black/25! bg-[#0B153C]/25! h-12! "
                      }
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
                        <h3 className="text-black text-[24px] font-bold max-sm:text-[14px]">
                          Mobile Number
                        </h3>
                        <p className="text-[20px] font-medium text-black/50 mt-5 mb-3  max-sm:text-[14px]">
                          Notifications for appointment and reminders will be
                          sent to this provided number
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
                          " sm:w-53 font-bold text-[24px] py-5! bg-[#17C2EC]! cursor-pointer max-sm:text-[14px] "
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
                "bg-[#17C2EC]! w-full text-[24px] font-bold py-5 rounded-[20px] cursor-pointer  max-sm:text-[14px]"
              }
              type="submit"
            >
              Submit
            </Button>
            <div className="flex items-center justify-center  gap-11.5 max-sm:gap-3">
              <h4 className="text-[20px] font-semibold text-black/50 max-sm:text-[14px]">
                Already registered ?
              </h4>
              <h4 className="font-bold text-[#17C2EC] text-[20px] max-sm:text-[14px]">
                Check your status{" "}
              </h4>
            </div>
          </form>
        </Form>
      </div>
      <img src={group_45} alt="" className="max-lg:order-2  " />
    </div>
  );
};

export default Forms;
