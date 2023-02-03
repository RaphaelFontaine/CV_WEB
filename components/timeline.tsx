import { Text, Timeline } from '@mantine/core';

export default function TimelineFunction() {
  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <Timeline active={3} align="left" color={"teal"}>

        <Timeline.Item 
            className='text-white'
            lineVariant="dashed" 
            title="Computer Science Engineer ENSEIRB-MATMECA" 
            bulletSize={22}
            >
            <Text  color="dimmed" size="sm" mt={32}>
                Computer science faculty, intensive computing and data science specialization
            </Text>
            <Text size="xs" mt={32} mb={8}>
                2018-2021 / Bordeaux
            </Text>
        </Timeline.Item>

        <Timeline.Item
            className='text-white'
            lineVariant="dashed"
            title="Prepa SALIEGE"
            bulletSize={24}
        >
            <Text color="dimmed" size="sm" mt={32}>
                PC*
            </Text>
            <Text size="xs" mt={32}>
                2016-2018 / Toulouse
            </Text>
        </Timeline.Item>

        <Timeline.Item
            className='text-white'
            title="Lycée Emilie de Rodat"
            lineVariant="dashed"
            bulletSize={24}
        >
            <Text color="dimmed" size="sm" mt={32}>
                Bac S
            </Text>
            <Text size="xs" mt={32}>
                2013-2016 / Toulouse
            </Text>
        </Timeline.Item>
        <Timeline.Item
            bulletSize={24}
        >
        </Timeline.Item>
      </Timeline>
    </div>
  );
}