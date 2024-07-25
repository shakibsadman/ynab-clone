"use client";

import React from "react";
import { Plus } from "lucide-react";
import {
  DialogClose,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { BankAccountSchema, TBankAccount } from "@/types/bank-account";
import create from "@/actions/account/create";
import { toast } from "sonner";

type Props = {};

export default function AddAccount({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const form = useForm<TBankAccount>({
    resolver: zodResolver(BankAccountSchema),
  });
  const handleCreateAccount = async (data: TBankAccount) => {
    const res = await create(data);
    if (res) {
      toast.success("Account is created");
      setIsOpen(false);
      form.reset();
    }
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="flex items-center gap-3 rounded-md bg-blue-500/20 px-3 py-2">
          <Plus className="h-5 w-5" />
          Add Account
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Add Account</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <h1 className="text-sm">
            Lets go! And don’t worry—if you change your mind, you can link your
            account at any time.
          </h1>
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => console.log(data))}
                className="flex flex-col gap-2"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Give a nick name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a account type ..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="checking">Checking</SelectItem>
                          <SelectItem value="savings">Saving</SelectItem>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="credit card">
                            Credit Card
                          </SelectItem>
                          <SelectItem value="line of credit">
                            Line of Credit
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="wroking_balance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        What is your current account balance?
                      </FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="h-40"></div>
                <Button onClick={form.handleSubmit(handleCreateAccount)}>
                  Next
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
