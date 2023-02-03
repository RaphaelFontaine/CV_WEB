import { Button, Group, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import { IMail } from 'models';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';

const PHONE_REGEX = new RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/);
const MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);


export default function GetInTouchSimple() {

    const { register, trigger, getValues, formState : { errors } } = useForm<IMail>()
  
    const submitForm = async() => {
      const is_valid = await trigger()
      if(!is_valid) return
      const requestOptions : RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(getValues())
      }
      
      const asyncFunc = async() => {
        const res = await fetch('api/send_email', requestOptions)
        if(!res.ok){
          throw new Error("Votre mail error")
        }
      } 
  
      toast.promise(asyncFunc(), {
        loading : 'Envoi de votre mail en cours',
        success : 'Votre mail a été envoyé avec succès !',
        error : (err) => err.message
      })
    }
  
    return (
      <div id="contact" className="phone:w-[50vw]">
          <div className='bg-fifth border-2 border-white hover:border-secondary transition-all duration-500 rounded-xl'>
            <SimpleGrid className='px-10 pt-6 space-x-5' cols={2} mt="xl">
                <TextInput label="Name *" placeholder="Your name"
                  {...register('full_name', {
                    required : { value : true, message : "This field is required !"},
                    minLength : { value : 2, message : ""}
                  })}
                  error={errors.full_name?.message}
                  className='hover:border-secondary'
                  classNames={{
                    "input": "focus:border-secondary border-2",
                    'label' : "text-white"
                  }}
                />
                <TextInput label="E-mail *" placeholder="your.name@gmail.com"
                  classNames={{
                    "input": "focus:border-secondary border-2",
                    'label' : "text-white"
                  }}
                  className='hover:border-secondary'
                  {...register('email', {
                    required : { value : true, message : "This field is required !"},
                    pattern: { value : MAIL_REGEX, message : "Please enter a valid email !"}
                  })}
                  error={errors.email?.message}
                />
            </SimpleGrid>
            <SimpleGrid className='px-10 py-6 space-x-5' cols={2} mt="xl" >
                <TextInput label="Phone number" placeholder="0611223344"
                  classNames={{
                    "input": "focus:border-secondary border-2",
                    'label' : "text-white"
                  }}
                  className='focus:border-secondary'
                  {...register('phone')}
                  error={errors.phone?.message}
                />
                <TextInput label="Subject" placeholder="subject"
                  classNames={{
                    "input": "focus:border-secondary border-2",
                    'label' : "text-white"
                  }}
                  className='hover:border-secondary'
                  {...register('subject')}
                  error={errors.subject?.message}
                />
            </SimpleGrid>
            <Textarea label="Your message" placeholder="Please include all your relevant information"
                classNames={{
                  "input": "focus:border-secondary border-2",
                  'label' : "text-white"
                }}
                className='mx-10'
                mt="md"
                maxRows={10}
                minRows={5}
                autosize
                {...register('message')}
                error={errors.message?.message}
            />
            
            <Group position="center" mt="xl" className='flex flex-col'>
              <Button onClick={submitForm} type="submit" size="md" className='button-send bg-fifth button-form border-2 border-white rounded-md text-white hover:text-secondary mt-7 hover:bg-white transition-all active:scale-90 duration-1000 mb-10'>
                Envoyer
              </Button>
            </Group>
          </div>
      </div>
    );
}


