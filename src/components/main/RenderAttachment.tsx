import React from 'react';
import type { Attachment } from './types';
import { attachment_styles } from './Styles';
import { Box, Typography, IconButton, GridLegacy as Grid } from '@mui/material';
import {
    Close as CloseIcon,
    AudioFile as AudioIcon,
    VideoLibrary as VideoIcon,
    InsertDriveFile as FileIcon,
} from '@mui/icons-material';
import { useGlobalContext } from '../../context/context';

interface RenderAttachmentProp {
    attachment: Attachment;
    removeAttachment: (id: string) => void;
}

export const RenderAttachment: React.FC<RenderAttachmentProp> = ({ attachment, removeAttachment }) => {
    const { mode } = useGlobalContext();

    const getFileIcon = (type: string) => {
        const iconProps = attachment_styles(mode).iconPropS;
        switch (type) {
            case 'video':
                return <VideoIcon sx={iconProps} />;
            case 'audio':
                return <AudioIcon sx={iconProps} />;
            default:
                return <FileIcon sx={iconProps} />;
        }
    };

    const getFileExtension = (filename: string) =>
        filename.split('.').pop()?.toUpperCase() || 'FILE';

    if (attachment.type === 'image') {
        return (
            <Box sx={attachment_styles(mode).imageCon}>
                <img
                    src={attachment.url}
                    alt={attachment.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <IconButton
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        removeAttachment(attachment.id);
                    }}
                    sx={attachment_styles(mode).closeIconCon}
                >
                    <CloseIcon sx={attachment_styles(mode).closeIconS} />
                </IconButton>
            </Box>
        );
    }

    return (
        <Box sx={attachment_styles(mode).attachmentCon}>
            <Box sx={attachment_styles(mode).attachmentBox}>
                <Box sx={attachment_styles(mode).attachmentSBox}>
                    <Box>
                        <Typography sx={attachment_styles(mode).nameS}>
                            {attachment.name.slice(0, 4)}...
                        </Typography>
                        <Typography sx={attachment_styles(mode).sizeS}>
                            {attachment.size}
                        </Typography>
                    </Box>
                    <IconButton
                        size="small"
                        onClick={(e) => {
                            e.stopPropagation();
                            removeAttachment(attachment.id);
                        }}
                        sx={attachment_styles(mode).fileCloseIconB}
                    >
                        <CloseIcon sx={{ fontSize: 10 }} />
                    </IconButton>
                </Box>

                <Box sx={attachment_styles(mode).fileCon}>
                    <Box sx={attachment_styles(mode).fileBox}>
                        {getFileIcon(attachment.type)}
                        <Typography sx={attachment_styles(mode).fileNameS}>
                            {getFileExtension(attachment.name)}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};


interface AttachmentsGridProp {
    attachments: Attachment[];
    removeAttachment: any
}

export const RenderAttachmentsGrid: React.FC<AttachmentsGridProp> = ({
    attachments, removeAttachment
}) => {
    return (
        <Grid container spacing={1} sx={{ p: 1 }}>
            {attachments.map((attachment) => (
                <Grid item xs={6} sm={4} md={3} key={attachment.id}>
                    <RenderAttachment {...{ attachment, removeAttachment }} />
                </Grid>
            ))}
        </Grid>
    );
};

interface MessageAttachmentsProp {
    attachments: Attachment[];
    removeAttachment: any
}

export const RenderMessageAttachments: React.FC<MessageAttachmentsProp> = ({
    attachments, removeAttachment
}) => {
    const { mode } = useGlobalContext();
    return (
        <Grid container spacing={1} sx={{ mt: 1 }}>
            {attachments.map(attachment => (
                <Grid item xs={6} sm={4} md={3} key={attachment.id}>
                    <Box sx={attachment_styles(mode).messageAttachemenBox}>
                        <RenderAttachment {...{ attachment, removeAttachment }} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};
