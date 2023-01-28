import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

type FormData = {
   comment: string
   name: string
   email: string
   website: string
}

const AddComment = ({ post, reply, setReply }: any) => {

   const {
      register,
      formState: {
         errors
      },
      handleSubmit
   }= useForm<FormData>({
      defaultValues:{
         comment: "",
         email: "",
         website: ""
      }
   })

   const onSubmit = handleSubmit(form => {
      const data = JSON.stringify(reply ? {
         post: post.databaseId,
         author_name: form.name,
         author_email: form.email,
         author_url: form.website,
         content: form.comment,
         parent: reply.databaseId
      } : {
         post: post.databaseId,
         author_name: form.name,
         author_email: form.email,
         author_url: form.website,
         content: form.comment,
      })
      toast.info("We need to approve this comment first! Please be patience!")
      // Store.addNotification({
      //    title: "Info",
      //    message: "We need to approve this comment first! Please be patients!",
      //    type: "info",
      //    insert: "top",
      //    container: "top-center",
      //    animationIn: ["animate__animated", "animate__fadeIn"],
      //    animationOut: ["animate__animated", "animate__fadeOut"],
      // })
   })
   return (
      <form
         onSubmit={onSubmit}
         className={`w-full p-5 bg-white border-2 shadow-hard-lg rounded-2xl ${
            reply 
               ? "border-violet-600" 
               : "border-black"
         }`}
      >
         <h2 className="font-bold text-neutral-600 w-full flex items-center tracking-wider text-lg">
            {reply ? `Reply to ${reply.author.node.name}` : "Leave a comment!"}
            {reply && (
               <button
                  className="ml-auto text-xs uppercase font-bold bg-violet-500 text-neutral-100 tracking-wide py-0.5 px-2 rounded hover:bg-violet-600"
                  onClick={() => setReply(false)}
               >
                  Cancel reply
               </button>
            )}
         </h2>
         <p className="text-xs py-4 text-neutral-400">
            Your email address will not be published. Required fields are marked
            *
         </p>
         <div className="flex flex-col mb-5">
            <h3 className="mb-1 text-neutral-400 font-bold text-sm">
               Comment *
            </h3>
            <textarea
               className="h-48 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-600"
               {...register("comment", {
                  required: "You need to enter a comment!"
               })}
            ></textarea>
            {errors.comment && <p className="uppercase text-xs text-red-400 font-bold tracking-wider mt-1">{errors["comment"].message}</p>}
         </div>
         <div className="flex flex-col">
            <h3 className="mb-1 text-neutral-400 font-bold text-sm">Name *</h3>
            
            <input
               type="text"
               className="w-64 rounded tracking-wide p-2 focus:outline-none focus:ring-2 ring-violet-500 text-sm"
               {...register("name", {
                  required: "You need to enter a name!"
               })}
               aria-invalid={errors.name ? "true" : "false"} 
            />
            {errors["name"] && <p className="uppercase text-xs text-red-400 font-bold tracking-wider mt-1">{errors["name"].message}</p>}
         </div>
         <div className="flex flex-col my-2">
            <h3 className="mb-1 text-neutral-400 font-bold text-sm">Email *</h3>
            <input
               type="email"
               className="w-64 rounded tracking-wide p-2 focus:outline-none focus:ring-2 ring-violet-500 text-sm"
               {...register("email", {
                  required: "You need to enter a email!"
               })}
               aria-invalid={errors.email ? "true" : "false"} 
            />
            {errors["email"] && <p className="uppercase text-xs text-red-400 font-bold tracking-wider mt-1">{errors["email"].message}</p>}
         </div>
         <div className="flex flex-col my-2">
            <h3 className="mb-1 text-neutral-400 font-bold text-sm">Website</h3>
            <input
               type="text"
               className="w-64 rounded tracking-wide p-2 focus:outline-none focus:ring-2 ring-violet-500 text-sm"
               {...register("website")}
            />
         </div>
         <button className="btn mt-2 px-4 p-2" type="submit">Post Comment</button>
      </form>
   )
}
export default AddComment
