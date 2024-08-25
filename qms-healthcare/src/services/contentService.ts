import { PrismaClient } from "@prisma/client/extension";

const prisma=new PrismaClient();

export const getContentByTitle=async(title:string)=>{
    return prisma.content.findFirst({where:{title}});
}