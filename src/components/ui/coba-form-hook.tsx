import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from './card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Textarea } from './textarea';
import { Button } from './button';

export function CobaFormHooks() {
    const formSchema = z.object({
      name: z.string().min(1),
      email: z.string().email(),
      feedback: z.string().min(1),
      division: z.enum(["hr", "sales", "marketing"]),
    });

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: '',
        email: '',
        feedback: '',
        division: 'hr',
        }
    });
    
    type FormSchema = z.infer<typeof formSchema>

    const onSubmit = (values: FormSchema) => {
        console.log('Form submitted:', values);
    };

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className='w-96'>
              <CardContent>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem className='mt-4'>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder='Enter your name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='mt-4'>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='Enter your email' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='division'
                  render={({ field }) => (
                    <FormItem className='mt-4'>
                      <FormLabel>Division</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Select Division' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='hr'>HR</SelectItem>
                            <SelectItem value='sales'>Sales</SelectItem>
                            <SelectItem value='marketing'>Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='feedback'
                  render={({ field }) => (
                    <FormItem className='mt-4'>
                      <FormLabel htmlFor='feedback'>Feedback</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Enter your feedback'
                          {...field}
                        ></Textarea>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />

                <Button className='w-full mt-4' type='submit'>Send Feedback</Button>
              </CardContent>
            </Card>
          </form>
        </Form>
    )
}