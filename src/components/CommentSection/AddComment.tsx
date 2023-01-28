import React, {useState} from "react"

const AddComment = ({post, reply, setReply}:any) => {
   const [comment, setComment] = useState('')
   const [name, setName] = useState('')
   const [email, setEmail]= useState('')
   const [website, setWebsite] = useState('')
   
   const handleSubmit = async e =>{
      e.preventDefault()
      // const data = JSON.stringify(reply ? {
      //    post: post.databaseId,
      //    author_name: name,
      //    author_email: email,
      //    author_url: website,
      //    content: comment,
      //    parent: reply.databaseId
      // } : {
      //    post: post.databaseId,
      //    author_name: name,
      //    author_email: email,
      //    author_url: website,
      //    content: comment,
      // })
      // try{
      //    await fetch('https://laupwing.site/wp-json/wp/v2/comments', {
      //       method: 'post',
      //       headers: {
      //          'Content-Type': 'application/json',
      //       },
      //       body: data,
      //    })
      //    Store.addNotification({
      //       title: "Info",
      //       message: "We need to approve this comment first, because of how wordpress comment works. I will approve it no matter what you commented! Free speech for all",
      //       type: "info",
      //       insert: "top",
      //       container: "top-center",
      //       animationIn: ["animate__animated", "animate__fadeIn"],
      //       animationOut: ["animate__animated", "animate__fadeOut"],
      //    })
      //    setComment('')
      //    setName('')
      //    setEmail('')
      //    setWebsite('')
      //    setReply(false)
      // }catch(e){
      //    Store.addNotification({
      //       title: "SOMETHING WENT WRONG!",
      //       message: "Comment failed to post! We will work on it",
      //       type: "warning",
      //       insert: "top",
      //       container: "top-center"
      //     });
      //    console.log(e)
      // }
   }
  return (
   <form 
   onSubmit={handleSubmit} 
   className={`w-full p-5 bg-neutral-200 border ${reply ? 'border-indigo-600' :'border-neutral-300'} rounded`}
>
   <h2 className='font-bold text-neutral-600 w-full flex items-center tracking-wider text-lg'>
      {reply ? `Reply to ${reply.author.node.name}` : 'Leave a comment!'}
      {reply && <button 
         className='ml-auto text-xs uppercase font-bold bg-indigo-600 text-neutral-100 tracking-wide py-0.5 px-2 rounded hover:bg-indigo-700'
         onClick={()=> setReply(false)}
      >
         Cancel reply
      </button>}
   </h2>
   <p className='text-xs py-4 text-neutral-400'>Your email address will not be published. Required fields are marked *</p>
   <div className='flex flex-col mb-5'>
      <h3 className='mb-2 text-neutral-400 font-bold text-sm'>Comment *</h3>
      <textarea 
         className='h-48 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600'
         onChange={(e)=> setComment(e.target.value)}
         value={comment}
      >
      </textarea>
   </div>
   <div className='flex flex-col'>
      <h3 className='mb-2 text-neutral-400 font-bold text-sm'>Name *</h3>
      <input 
         type="text"  
         className="w-64 rounded tracking-wide p-2 focus:outline-none focus:ring-2 ring-indigo-500 text-sm"
         value={name}
         onChange={e => setName(e.target.value)}
      />
   </div>
   <div className='flex flex-col my-2'>
      <h3 className='mb-2 text-neutral-400 font-bold text-sm'>Email *</h3>
      <input 
         type="email"  
         className="w-64 rounded tracking-wide p-2 focus:outline-none focus:ring-2 ring-indigo-500 text-sm"
         value={email}
         onChange={e => setEmail(e.target.value)}
      />
   </div>
   <div className='flex flex-col my-2'>
      <h3 className='mb-2 text-neutral-400 font-bold text-sm'>Website</h3>
      <input 
         type="text"  
         className="w-64 rounded tracking-wide p-2 focus:outline-none focus:ring-2 ring-indigo-500 text-sm"
         value={website}
         onChange={e => setWebsite(e.target.value)}
      />
   </div>
   <button className="btn mt-2 px-4 p-2">Post Comment</button>
</form>
  )
}
export default AddComment