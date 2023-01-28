import Avatar from "boring-avatars"
import * as React from "react"

const Comment = ({ comment, setReply, reply }: any) => {
   return (
      <div
         className={`flex flex-col bg-white py-3 mb-4 px-2 rounded shadow-hard-base border-2 ${ 
            reply === comment 
               ? "border-violet-600" 
               : "border-black"
         }`}
      >
         <CommentContent comment={comment} avatarSize={60} />
         <div className="flex flex-col">
            {comment.replies.nodes.map((c: any) => (
               <div className="flex items-center" key={c.id}>
                  <div className="h-0.5 rounded-full mx-2 w-10 bg-neutral-300"></div>
                  <CommentContent
                     comment={c}
                     avatar_size={50}
                     className="my-4"
                  />
               </div>
            ))}
         </div>
         {reply === comment ? (
            <button
               className="ml-auto uppercase text-sm font-bold tracking-wider text-indigo-300 hover:text-indigo-600"
               onClick={() => setReply(false)}
            >
               Cancel Reply
            </button>
         ) : (
            <button
               className="ml-auto uppercase text-sm font-bold tracking-wider text-indigo-300 hover:text-indigo-600"
               onClick={() => setReply(comment)}
            >
               Reply
            </button>
         )}
      </div>
   )
}
export default Comment

const CommentContent = ({ comment, avatarSize, className = "" }: any) => {
   return (
      <div className={"flex-1 flex " + className}>
         <Avatar
            size={avatarSize}
            name={comment.author.node.name}
            variant={"beam"}
         />
         <div className="ml-2 flex flex-col flex-1">
            <div className="flex justify-between flex-1 items-center">
               <h3 className="font-bold uppercase text-sm">
                  {comment.author.node.name}
               </h3>
               <p className="uppercase font-bold text-xs text-neutral-400">
                  {comment.date}
               </p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: comment.content }}></p>
         </div>
      </div>
   )
}
