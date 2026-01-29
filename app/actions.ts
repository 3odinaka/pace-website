"use server";

import { z } from "zod";
import { supabase } from "@/utils/supabase";

const schema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters long"),
    email: z.string().trim().email("Please enter a valid email address"),
    phone: z.string().trim().optional(),
});

export type State = {
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
    };
    success?: boolean;
};

export async function subscribeUser(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = schema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please correct the errors below.",
            success: false,
        };
    }

    const { name, email, phone } = validatedFields.data;

    try {
        const { error } = await supabase
            .from("subscribers")
            .upsert([{ name, email, phone }], { onConflict: "email" });

        if (error) {
            console.error(error);
            return { message: "Something went wrong. Please try again.", success: false };
        }

        return { message: "You're in! Welcome to the Waiting List.", success: true };
    } catch (error) {
        console.error(error);
        return { message: "Failed to connect to the server.", success: false };
    }
}
