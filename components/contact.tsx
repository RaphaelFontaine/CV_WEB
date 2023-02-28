import { Button, Group, SimpleGrid, Textarea, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';

type FormValues = {
  Nom: string;
  Email: string;
  Téléphone: string;
  Sujet: string;
  Message: string;
};

export function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const phoneRegex = new RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Utilisation d'axios pour envoyer le formulaire à Formsprée
      toast.success('The form has been submitted successfully!')
      await axios.post('https://formspree.io/f/xnqydjav', data);
      console.log('ENvoi eOK')
      toast.success('The form has been submitted successfully!')
      setSubmitted(true);
      
    } catch (error) {
      console.log('Envoi error')
      toast.error('An error occurred while submitting the form.\nPlease contact 07 62 88 80 22')
    }
    setIsSubmitting(false);
  };
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center px-10 ft:px-16">
            <div className='bg-fifth border-2 space-y-10 shadow-[inset_0_-2px_15px_rgba(0,0,0,0.6)] max-w-2xl border-secondary transition-all duration-500 rounded-xl'>
              <SimpleGrid className='px-10 flex flex-wrap gap-10 items-center justify-center' cols={2} mt="xl">
                  <div>
                    <TextInput label="Name *" placeholder="Your name"
                      {...register('Nom', {
                        required : { value : true, message : "Please enter your name"},
                      })}
                      className='hover:border-secondary'
                      classNames={{
                        "input": "focus:border-secondary border-2",
                        'label' : "text-white"
                      }}
                    />
                    {errors.Nom && <p className='text-secondary absolute text-skills'>{errors.Nom.message}</p>}
                  </div>
                  <div>
                    <TextInput label="E-mail *" placeholder="your.name@gmail.com"
                      classNames={{
                        "input": "focus:border-secondary border-2",
                        'label' : "text-white"
                      }}
                      className='hover:border-secondary'
                      {...register('Email', {
                        required: 'Please enter an email address',
                        pattern: {
                          value: emailRegex,
                          message: 'Please enter a valid email address',
                        },
                        validate: (value) =>
                          value.trim() !== '' ||
                          'Please enter a valid email address',
                      })}
                    />
                    {errors.Email && <p className='text-secondary absolute text-skills'>{errors.Email.message}</p>}
                  </div>
              </SimpleGrid>
              <SimpleGrid className='px-10 flex flex-wrap gap-10 items-center justify-center' cols={2} mt="xl" >
                <div>
                  <TextInput label="Phone number" placeholder="0611223344"
                    classNames={{
                      "input": "focus:border-secondary border-2",
                      'label' : "text-white"
                    }}
                    className='focus:border-secondary'
                    {...register('Téléphone', {
                      required: 'Please enter a phone number',
                      pattern: {
                        value: phoneRegex,
                        message: 'Please enter a valid phone number',
                      },
                      validate: (value) =>
                        value.trim() !== '' ||
                        'Please enter a valid phone number',
                    })}
                  />
                  {errors.Téléphone && <p className='text-secondary absolute text-skills'>{errors.Téléphone.message}</p>}
                  </div>
                  <TextInput label="Subject" placeholder="subject"
                    classNames={{
                      "input": "focus:border-secondary border-2",
                      'label' : "text-white"
                    }}
                    className='hover:border-secondary'
                    {...register('Sujet')}
                    error={errors.Sujet?.message}
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
                  {...register('Message')}
                  error={errors.Message?.message}
              />
              
              <Group position="center" mt="xl" className='flex flex-col'>
                <Button type="submit" disabled={isSubmitting} size="md" className='button-send bg-fifth button-form border-2 border-white rounded-md text-white hover:text-secondary mt-7 hover:bg-white transition-all active:scale-90 duration-1000 mb-10'>
                  Send
                </Button>
              </Group>
            </div>
        </div>
      </form> 

  );
}

export default function GetInTouchSimple() {
  return (
      <ContactForm/>
  );
}



