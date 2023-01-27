import Avatar from "boring-avatars"
import * as React from "react"

const Comment = ({comment, setReply, reply}:any) => {
   return (
      <div className={`flex flex-col py-3 mb-4 px-2 rounded border shadow ${
         reply === comment 
            ? "border-indigo-600" 
            : "border-neutral-200"}`
         }
      >
         <CommentContent
            comment={comment}
            avatarSize={60}
         />
      </div>
   )
}
export default Comment

const CommentContent = ({comment, avatarSize, className=""}:any) => {
   return (
      <div className={"flex-1 flex " + className}>
         <Avatar
            size={avatarSize}
            name={comment.author.node.name}
            variant={"beam"}
         />
      </div>
   )
}