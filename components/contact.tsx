import { Button, Group, SimpleGrid, Textarea, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const PHONE_REGEX = new RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/);
const MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

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
      await axios.post('https://formspree.io/f/xnqydjav', data);
      toast.success('Le formulaire a été soumis avec succès!')

      setSubmitted(true);
    } catch (error) {
      toast.error('Une erreur est survenue lors de la soumission du formulaire.\nVeuillez contactez le 07 62 88 80 22')
    }

    setIsSubmitting(false);
  };
  return (
    <div className='bg-light-grey border-2 ft:w-auto border-secondary hover:border-green transition-all duration-500 rounded-xl'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="phone:w-[50vw]">
          <div className='bg-fifth border-2 shadow-[inset_0_-2px_15px_rgba(0,0,0,0.6)] border-secondary transition-all duration-500 rounded-xl'>
            <SimpleGrid className='px-10 pt-6 space-x-5' cols={2} mt="xl">
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
                  {errors.Nom && <p className='text-secondary absolute text-satisfaction'>{errors.Nom.message}</p>}
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
                  {errors.Email && <p className='text-secondary absolute text-satisfaction'>{errors.Email.message}</p>}
                </div>
            </SimpleGrid>
            <SimpleGrid className='px-10 py-6 space-x-5' cols={2} mt="xl" >
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
                {errors.Téléphone && <p className='text-secondary absolute text-satisfaction'>{errors.Téléphone.message}</p>}
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

          {/* <div className='flex flex-wrap items-center justify-center px-10 py-5 ft:py-10 gap-5'>
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="name">
                  Nom *
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green overflow-hidden text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  type="text" 
                  id="Nom"
                  placeholder=" Jean Dupont"
                  {...register('Nom', { required: true })}
                />
                {errors.Nom && <p className='text-white absolute text-satisfaction'>Ce champ est requis.</p>}
              </div>
            </div>  
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="email">
                  E-mail *
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  id="Email"
                  type="text" 
                  placeholder=" jean.dupont@gmail.com"
                  {...register('Email', {
                    required: 'Veuillez entrer votre adresse e-mail.',
                    pattern: {
                      value: emailRegex,
                      message: 'Veuillez entrer une adresse e-mail valide.',
                    },
                    validate: (value) =>
                      value.trim() !== '' ||
                      'Veuillez entrer votre adresse e-mail.',
                  })}
                />
                {errors.Email && <p className='text-white absolute text-satisfaction'>{errors.Email.message}</p>}
              </div> 
            </div>  
          </div>  
          <div className='flex flex-wrap items-center justify-center px-10 py-5 ft:py-10 gap-5'>
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="phone">
                  Téléphone *
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  id="phone"
                  type="text" 
                  placeholder=" 0611223344"
                  {...register('Téléphone', {
                    required: 'Veuillez entrer votre numéro de téléphone.',
                    pattern: {
                      value: phoneRegex,
                      message: 'Veuillez entrer un numéro de téléphone valide.',
                    },
                    validate: (value) =>
                      value.trim() !== '' ||
                      'Veuillez entrer votre numéro de téléphone.',
                  })}
                />
              </div>
              {errors.Téléphone && <p className='text-white absolute text-satisfaction'>{errors.Téléphone.message}</p>}
            </div>
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="subject">
                  Sujet
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  id="subject"
                  type="text" 
                  placeholder=" Stores Bannes"
                  {...register('Sujet', { required: false })}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center px-10 py-10 pt-6'>
            <label className='text-white flex items-start justify-start' htmlFor="message">
              Message
            </label>
            <input
              className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-full h-40'
              id="message"
              type="text"
              placeholder=" Votre message"
              {...register('Message', { required: false })}
            />
          </div>
          <div className='flex items-center justify-center pb-4'>
            <Button type="submit" disabled={isSubmitting} size="md" className='bg-white button-form text-green hover:text-white mt-7 hover:bg-green transition-all active:scale-90 duration-1000 mb-10'>
                  Envoyer
            </Button>
          </div> */}
      </form> 
    </div>

  );
}

export default function GetInTouchSimple() {
  return (
    <>
      <ContactForm/>
    </>
  );
}



