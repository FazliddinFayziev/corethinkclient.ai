import React from 'react';
import { styles } from './Styles';
import { Modal } from '@mui/material';
import SettingsPanel from './SettingsPanel';
import type { SettingsPanelProp } from './SettingsPanel';
import { useGlobalContext } from '../../context/context';

interface SettingsModalProps {
    open: boolean;
    onClose: () => void;
    settingsProps: SettingsPanelProp;
};

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose, settingsProps }) => {
    const { mode } = useGlobalContext();
    return (
        <Modal open={open} onClose={onClose} sx={styles(mode).settingModalCon}>
            <SettingsPanel {...settingsProps} />
        </Modal>
    );
};

export default SettingsModal;